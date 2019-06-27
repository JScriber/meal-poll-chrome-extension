import { Group, Available } from './popup.model';

/**
 * Renders data in the view.
 */
export class Renderer {

  /** Template for groups. */
  private static GROUP_TEMPLATE: HTMLElement;

  /** Template for available place to eat. */
  private static AVAILABLE_TEMPLATE: HTMLElement;

  /**
   * Loads the reference to the templates.
   */
  static loadTemplates() {
    // Set the group model reference.
    Renderer.GROUP_TEMPLATE = document.getElementById('group-template');

    // Set the availables model reference.
    Renderer.AVAILABLE_TEMPLATE = document.getElementById('available-template');
  }

  /**
   * Renders the given groups.
   * @param groups 
   */
  renderGroups(groups: Group[]) {
    const groupsDOM: HTMLElement = document.getElementById('groups');

    // Remove children.
    this.deleteChildren(groupsDOM);

    groups.forEach(group => {
      const template = this.duplicateTemplate(Renderer.GROUP_TEMPLATE);
  
      // Set the description.
      template.setAttribute('title', 'Rejoindre l\'équipe ' + group.name);
  
      // Set the picture of the group.
      const groupPicture: HTMLImageElement = template.querySelector('.place-to-eat img');
      groupPicture.setAttribute('src', group.picture);
  
      // Set the members.
      const eater = template.querySelector('.eater');

      group.members.forEach(member => {
        const img = document.createElement('IMG') as HTMLImageElement;
        img.setAttribute('src', member.picture);
  
        eater.appendChild(img);
      });
  
      groupsDOM.appendChild(template);
    });
  }

  /**
   * Displays the availables.
   * @param {*} availables 
   */
  renderAvailables(availables: Available[]) {

    const availablesDOM = document.getElementById('availables');

    // Remove children.
    this.deleteChildren(availablesDOM);

    availables.forEach(available => {
      const template = this.duplicateTemplate(Renderer.AVAILABLE_TEMPLATE);

      // Update the picture.
      template.querySelector('img').setAttribute('src', available.picture);

      availablesDOM.appendChild(template);
    });
  }

  /**
   * Deletes all the children of the parent.
   * @param {*} parent 
   */
  private deleteChildren(parent: HTMLElement) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  };

  /**
   * Generates a group template.
   * @param {*} model
   * @returns {HTMLElement}
   */
  private duplicateTemplate(model: any): HTMLElement {
    const duplicate = model.cloneNode(true);

    duplicate.removeAttribute('id');

    return duplicate;
  }
}
