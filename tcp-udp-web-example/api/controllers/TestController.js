/**
 * HomeController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

// api/controllers/TestController.js
// api/controllers/TestController.js

module.exports = {
  index: function(req, res) {
    res.view('test/index');
  },

  sendTcpMessage: function(req, res) {
    var message = req.param('tcpMessage');
    var latency = req.param('tcpLatency');
    var packetLoss = req.param('tcpPacketLoss');
    
    // Lógica para enviar a mensagem via TCP e obter a resposta
    // Passar a mensagem, latência e perda de pacotes para a lógica de envio
    // Exemplo: sendTcpMessage(message, latency, packetLoss);

    return res.ok({ response: 'Resposta TCP: ' + message });
  },

  sendUdpMessage: function(req, res) {
    var message = req.param('udpMessage');
    var latency = req.param('udpLatency');
    var packetLoss = req.param('udpPacketLoss');
    
    // Lógica para enviar a mensagem via UDP e obter a resposta
    // Passar a mensagem, latência e perda de pacotes para a lógica de envio
    // Exemplo: sendUdpMessage(message, latency, packetLoss);

    return res.ok({ response: 'Resposta UDP: ' + message });
  }
};
