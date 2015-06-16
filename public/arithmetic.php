<?php

function add($a, $b)
{
    return $a + $b;
}

function subtract($a, $b)
{
    return $a - $b;
}

function multiply($a, $b)
{
    return $a * $b;
}

function divide($a, $b)
{
    return $a / $b;
}

echo "Addition: 4 + 5 = " . add(4,5) . PHP_EOL;
echo "Subtraction: 4 - 5 = " . subtract(4,5) . PHP_EOL;
echo "Multiplication: 4 * 5 = " . multiply(4,5) . PHP_EOL;
echo "Division: 4 / 5 = " . divide(4,5) . PHP_EOL;

?>