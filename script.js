    // Função para obter uma posição aleatória dentro dos limites da tela
    function getRandomPositionWithinBounds() {
        var screenWidth = window.innerWidth;
        var screenHeight = window.innerHeight;
        var buttonWidth = 50; // Largura do botão
        var buttonHeight = 20; // Altura do botão

        var maxX = screenWidth - buttonWidth;
        var maxY = screenHeight - buttonHeight;

        var randomX = Math.floor(Math.random() * maxX);
        var randomY = Math.floor(Math.random() * maxY);

        return { x: randomX, y: randomY };
      }

      var movableButton = document.getElementById('movableButton');

      // Adiciona um ouvinte de evento para verificar a posição do mouse
      document.addEventListener('mousemove', function (event) {
        // Obtém a posição atual do mouse
        var mouseX = event.clientX;
        var mouseY = event.clientY;

        // Obtém a posição do botão
        var buttonRect = movableButton.getBoundingClientRect();
        var buttonX = buttonRect.x + buttonRect.width / 2;
        var buttonY = buttonRect.y + buttonRect.height / 2;

        // Calcula a distância entre o mouse e o botão
        var distance = Math.sqrt((mouseX - buttonX) ** 2 + (mouseY - buttonY) ** 2);

        // Se a distância for menor que 30 pixels, move o botão para uma nova posição dentro dos limites da tela
        if (distance < 30) {
          var newPosition = getRandomPositionWithinBounds();
          movableButton.style.position = 'absolute';
          movableButton.style.left = newPosition.x + 'px';
          movableButton.style.top = newPosition.y + 'px';
        }
      });