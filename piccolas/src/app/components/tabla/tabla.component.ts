import { Component, OnInit, inject } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PedidoService } from '../../services/pedido/pedido.service';
import { error } from 'console';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatTableModule
  ],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent implements OnInit{
  constructor(){
  }
  ngOnInit(): void {
    this.getData()
  }
  data: any[] = []
  displayedColumns: string[] = ['id_pedido', 'nombre', 'precio_venta', 'cantidad', 'estado'];
  dataSource = new MatTableDataSource(this.data);
  pedidoService = inject(PedidoService)


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  get usuario_id(){
    return localStorage.getItem('usuario')
  }

  getData(){
    try {
      this.pedidoService.getPedidoByUsuario(this.usuario_id).subscribe({
        next: (res: any) => {
          this.data = res.detalle
          this.dataSource.data=this.data       
        },
        error: (err : any) =>{
          console.error('error', err)
        }
      })
    } catch (error) {
      Swal.fire('Error', 'Error', 'error')
    }
  }
}
