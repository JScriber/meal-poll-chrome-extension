import { Renderer } from './renderer';

/**
 * Wait for the popup to load.
 */
document.addEventListener('DOMContentLoaded', () => {
  
  // Load the reference to the templates for the first time.
  Renderer.loadTemplates();
  
  // Classe that renders the data.
  const renderer = new Renderer();

  renderer.renderGroups([
    {
      name: 'Leclerc',
      picture: 'https://www.stickpng.com/assets/images/5a1c2d89f65d84088faf13cc.png',
      members: [
        {
          name: 'Untel',
          picture: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'
        },
        {
          name: 'Untel',
          picture: 'https://www.gravatar.com/avatar/00000000000000000000000000000000'
        }
      ]
    },
    {
      name: 'Macdo',
      picture: 'https://www.mcdonalds.com.mt/wp-content/uploads/2018/09/McD-MT-Green-logo-01.png',
      members: [
        {
          name: 'Untel',
          picture: 'https://www.gravatar.com/avatar/00000000000000000000000000000000'
        }
      ]
    }
  ]);

  renderer.renderAvailables([
    {
      name: 'Pizza Sprint',
      picture: 'http://www.pizzasprint.com/sites/all/themes/pizzasprint/logo.png'
    },
    {
      name: 'Carrefour',
      picture: 'https://www.stickpng.com/assets/images/5842906ca6515b1e0ad75abb.png'
    }
  ]);
}, false);
