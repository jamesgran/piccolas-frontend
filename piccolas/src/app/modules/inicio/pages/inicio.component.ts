import { Component } from '@angular/core';
import { BannerComponent } from "../../../components/banner/banner.component";

@Component({
    selector: 'app-inicio',
    standalone: true,
    templateUrl: './inicio.component.html',
    styleUrl: './inicio.component.css',
    imports: [BannerComponent]
})
export class InicioComponent {

}
