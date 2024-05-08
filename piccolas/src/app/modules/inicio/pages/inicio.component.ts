import { Component } from '@angular/core';
import { BannerComponent } from "../../../components/banner/banner.component";
import { CardComponent } from "../../../components/card/card.component";

@Component({
    selector: 'app-inicio',
    standalone: true,
    templateUrl: './inicio.component.html',
    styleUrl: './inicio.component.css',
    imports: [BannerComponent, CardComponent]
})
export class InicioComponent {
    productos: any[]=[1,2,3,4]

}
