<?php
// Kontaktformular -> E-Mail an office@garagen-reich.at (läuft auf dem hosttech/Plesk-Webspace)
header('Content-Type: application/json; charset=utf-8');

$to   = 'office@garagen-reich.at';
$from = 'noreply@garagen-reich.at';

function fail($code, $msg) {
    http_response_code($code);
    echo json_encode(['ok' => false, 'error' => $msg]);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    fail(405, 'Methode nicht erlaubt.');
}

// Spam-Schutz: verstecktes Feld + Mindestzeit zwischen Seitenaufruf und Absenden
if (!empty($_POST['website'])) {
    echo json_encode(['ok' => true]); // Bots still abspeisen
    exit;
}
$started = isset($_POST['started']) ? (int) $_POST['started'] : 0;
if ($started > 0 && (time() - intdiv($started, 1000)) < 3) {
    fail(429, 'Bitte versuche es in einem Moment erneut.');
}

$clean = function ($v) {
    return trim(str_replace(["\r", "\n"], ' ', (string) $v));
};
$name    = mb_substr($clean($_POST['name'] ?? ''), 0, 120);
$email   = mb_substr($clean($_POST['email'] ?? ''), 0, 160);
$message = mb_substr(trim((string) ($_POST['message'] ?? '')), 0, 5000);

if ($name === '' || $message === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    fail(422, 'Bitte fülle alle Felder korrekt aus.');
}

$subject = '=?UTF-8?B?' . base64_encode('Neue Garagen-Anfrage von ' . $name) . '?=';
$body = "Neue Anfrage über garagen-reich.at\n\n"
      . "Name:    $name\n"
      . "E-Mail:  $email\n"
      . "Zeit:    " . date('d.m.Y H:i') . "\n\n"
      . "Nachricht:\n$message\n\n"
      . "Einwilligung zur Datenverarbeitung (Datenschutzerklärung/AGB) wurde im Formular bestätigt.\n";

$headers = [
    'From: garagen-reich.at <' . $from . '>',
    'Reply-To: ' . $name . ' <' . $email . '>',
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
];

if (!mail($to, $subject, $body, implode("\r\n", $headers), '-f' . $from)) {
    fail(500, 'Die Nachricht konnte nicht gesendet werden.');
}
echo json_encode(['ok' => true]);
