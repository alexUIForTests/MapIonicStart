import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {MouseEvent} from '@agm/core';
import {Geolocation} from '@ionic-native/geolocation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // google maps zoom level
  zoom: number = 8;

  // initial center position for the map
  lat: number = Number(localStorage.getItem('lat'));
  lng: number = Number(localStorage.getItem('lon'));

  markers: marker[] = [
    {
      lat: this.lat,
      lng: this.lng,
      label: 'Alex',
      draggable: false
    }
  ]

  constructor(public navCtrl: NavController, private geolocation: Geolocation) {
    // use some service for create other marker
    // const respone = {};
    // this.createOtherPeople(respone);
  }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

  createOtherPeople(value) {
    this.markers.push({
      lat: value.coords.lat,
      lng: value.coords.lng,
      draggable: false
    });
  }

  mapClicked($event: MouseEvent) {
    // this.markers.push({
    //   lat: $event.coords.lat,
    //   lng: $event.coords.lng,
    //   draggable: false
    // });
  }
}

// just an interface for type safety.
interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
