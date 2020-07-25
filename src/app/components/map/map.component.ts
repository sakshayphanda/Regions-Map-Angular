import { Component, OnInit } from '@angular/core';
import { GlobalDataService } from '../../shared/services/global-data.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.sass'],
})
export class MapComponent implements OnInit {
  title = 'region';
  center: google.maps.LatLngLiteral;
  markers = [];
  zoom = 12;
  options: google.maps.MapOptions = {
    mapTypeId: 'roadmap',
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
    backgroundColor: 'var(--primary)',
  };
  showMap = false;

  constructor(private globalDataService: GlobalDataService) {}

  ngOnInit() {
    this.globalDataService.selectedRegion.subscribe((region) => {
      console.log('map: ', region);

      this.markers = [];
      region.cities.forEach((city) => {
        if (!city.disabled) {
          this.markers.push({
            position: {
              lat: city.lattitude,
              lng: city.longitude,
            },
            label: {
              color: 'white',
              text: city.name + `(${region.name})`,
            },
            title: city.name + `(${region.name})`,
            options: {
              animation: google.maps.Animation.DROP,
              icon: `http://maps.google.com/mapfiles/ms/icons/${city.color ? city.color : 'blue'}-dot.png`
            },
          });
        }
      });
    });

    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      this.showMap = true;
      console.log(this.center);
    });
  }

  openInfo(event) {}

  addMarker() {
    this.markers.push({
      position: {
        lat: this.center.lat + ((Math.random() - 0.5) * 2) / 10,
        lng: this.center.lng + ((Math.random() - 0.5) * 2) / 10,
      },
      label: {
        color: 'red',
        text: 'Marker label ' + (this.markers.length + 1),
      },
      title: 'Marker title ' + (this.markers.length + 1),
      info: 'Marker info ' + (this.markers.length + 1),
      options: {
        animation: google.maps.Animation.BOUNCE,
      },
    });
  }
}
