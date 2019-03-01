import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private links = new Array<{ text: string, path: string, icon: string }>();

  constructor() {
    this.addItem({text: 'Home', path: '/', icon: 'home'});
    this.addItem({text: 'about', path: '/about', icon: 'work'});
    this.addItem({text: 'contact', path: '/contact', icon: 'contacts'});
    this.addItem({text: 'payment', path: '/payment', icon: 'payment'});
    this.addItem({text: 'license', path: '/license', icon: 'ballot'});
  }

  addItem({text, path, icon = ''}) {
    this.links.push({text: text, path: path, icon: icon});
  }

  getLinks() {
    return this.links;
  }
}
