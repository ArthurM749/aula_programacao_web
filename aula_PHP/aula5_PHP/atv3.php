<?php

$temperaturas = [
    [
        "temperatura" => 12,
    ],
    [
        "temperatura" => 13,
    ],
    [
        "temperatura" => 24,
    ],
    [
        "temperatura" => 42,
    ],
    [
        "temperatura" => 32,
    ],
    [
        "temperatura" => 22,
    ],
    [
        "temperatura" => 23,
    ],
    [
        "temperatura" => 20,
    ],
    [
        "temperatura" => 39,
    ],
    [
        "temperatura" => 30,
    ],
];

$tempMedia = 0;
$tempMaior = 0;
$tempMenor = 999999;



foreach ($temperaturas as $temperatura) {

    $tempMedia +=  $temperatura["temperatura"];

    if($tempMaior < $temperatura["temperatura"]){
        $tempMaior = $temperatura["temperatura"];
    }
    
    if($tempMenor > $temperatura["temperatura"]){
        $tempMenor = $temperatura["temperatura"];
    }
}


$tempMedia /= 10;

print_r("\n\nMédia : ".$tempMedia);
print_r("\nMaior : ".$tempMaior);
print_r("\nMenor : ".$tempMenor);
print_r("\n\n\n");