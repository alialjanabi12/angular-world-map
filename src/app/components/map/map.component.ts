import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-map',
  standalone: false,
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  countryData: any; // Property to hold country data
  private readonly colors = [
    '#1B3A4B',
    '#3A5C6B',
    '#5F7885',
    '#8B9DA6',
    '#2F6D7A',
    '#168AAD',
    '#1A759F',
    '#1E6091',
    '#184E77',
  ];
  private readonly borderColor = '#e2c044';

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    const svgPaths = document.querySelectorAll<SVGPathElement>('path');

    svgPaths.forEach((svgPath) => {
      const randomColor =
        this.colors[Math.floor(Math.random() * this.colors.length)];
      svgPath.setAttribute('fill', randomColor);
      svgPath.setAttribute('stroke', this.borderColor);
      svgPath.setAttribute('stroke-width', '.7');

      svgPath.addEventListener('mouseover', () => this.onMouseOver(svgPath));
      svgPath.addEventListener('mouseleave', () => this.onMouseLeave(svgPath));
      svgPath.addEventListener('click', () => this.loadCountryData(svgPath.id));
    });
  }

  onMouseOver(path: SVGPathElement): void {
    path.style.fill = '#e2c044';
  }

  onMouseLeave(path: SVGPathElement): void {
    path.style.fill = path.getAttribute('fill')!;
  }

  loadCountryData(countryCode: string): void {
    this.countryService.getCountryInfo(countryCode).subscribe(
      (data) => {
        this.countryData = data[1][0];
        console.log('Country data:', this.countryData);
      },
      (error) => {
        console.error('Error loading country data:', error);
      }
    );
  }
}
