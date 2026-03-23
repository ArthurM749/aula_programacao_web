<?php

interface RepositorioPedidos{
    public function salvarPedido($valor);
}


interface Notificador{
    public function enviar($mensagem); 
}



class Pedido{
    private $valor;
    private $desconto;
    private $repositorio;
    private $notificador;


    public function __construct($valor, RegraDesconto $desconto, RegraRepositorio $repositorio, RegraNotificador $notificador){
        $this->valor = $valor;
        $this->desconto = $desconto;
        $this->repositorio = $repositorio;
        $this->notificador = $notificador;

        
    }

    public function processarPedido(){
       $valorFinal = $this->valor - $this->desconto->calcular($this->valor);

       $this->repositorio->salvarPedido($valorFinal);
       $this->notificador->enviar("Pedido no valor de {$valorFinal} processado");
    }
}









class MySQL implements RepositorioPedidos {
    public function salvarPedido($valor)
    {
        echo "Salvando pedido no MySQL com valor {$valor} <br>";
    }
}

class Email implements Notificador{
    public function enviar($mensagem)
    {
        echo "Enviando email: {$mensagem} <br>";
    }
}

class DescontoVip implements RegraDesconto {
    public function calcular($valor) {
        return $valor * 0.2;
    }
}

class DescontoRegular implements RegraDesconto {
    public function calcular($valor){
        return $valor * 0.1;
    }
}

class SemDesconto implements RegraDesconto {
    public function calcular($valor){
        return 0;
    }
}