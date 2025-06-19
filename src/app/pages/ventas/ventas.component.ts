import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RepuestosService, Repuesto } from '../../services/repuestos.service';

@Component({
  selector: 'app-ventas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {

  repuestos: Repuesto[] = [];

  /** Modelo ligado al formulario */
  nuevoRepuesto: Repuesto = { nombre: '', marca: '', precio: 0, imagen: '' };

  /** Estado de edición */
  editando = false;
  repuestoEditandoId = '';

  /** Vista previa de la imagen */
  previewUrl = '';

  constructor(private repuestoService: RepuestosService) {}

  // ───────────────────────────────────────── ngOnInit
  ngOnInit(): void {
    this.obtenerRepuestos();
  }

  // ───────────────────────────────────────── CRUD
  obtenerRepuestos() {
    this.repuestoService.getRepuestos()
      .subscribe({
        next: data => this.repuestos = data,
        error: err => console.error('[GET] error:', err)
      });
  }

  agregarRepuesto() {
    this.repuestoService.agregarRepuesto(this.nuevoRepuesto)
      .subscribe({
        next: () => this.resetFormulario(),
        error: err => console.error('[POST] error:', err)
      });
  }

  eliminarRepuesto(id: string) {
    this.repuestoService.eliminarRepuesto(id)
      .subscribe({
        next: () => this.obtenerRepuestos(),
        error: err => console.error('[DELETE] error:', err)
      });
  }

  /** Carga repuesto al formulario */
  editarRepuesto(r: Repuesto) {
    const { _id, ...sinId } = r as any;    // <-- quitamos _id
    this.nuevoRepuesto = { ...sinId };
    this.previewUrl     = r.imagen;
    this.repuestoEditandoId = r._id!;
    this.editando = true;
  }

  actualizarRepuesto() {
    // aseguramos enviar el objeto completo SIN _id
    const { _id, ...body } = this.nuevoRepuesto as any;

    this.repuestoService.actualizarRepuesto(this.repuestoEditandoId, body)
      .subscribe({
        next: () => this.resetFormulario(),
        error: err => console.error('[PUT] error:', err)
      });
  }

  cancelarEdicion() { this.resetFormulario(); }

  private resetFormulario() {
    this.nuevoRepuesto = { nombre: '', marca: '', precio: 0, imagen: '' };
    this.previewUrl = '';
    this.editando = false;
    this.repuestoEditandoId = '';
    this.obtenerRepuestos();
  }

  // ───────────────────────────────────────── Imagen local
  onFileSelected(e: Event) {
    const file = (e.target as HTMLInputElement).files?.[0];
    if (!file) return;

    // límite de 100 kB para CRUDCrud
    if (file.size > 1000 * 1024) {
      alert('Imagen demasiado grande (máx. 100 kB).');
      (e.target as HTMLInputElement).value = '';
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      this.previewUrl = reader.result as string;
      this.nuevoRepuesto.imagen = this.previewUrl;
    };
    reader.readAsDataURL(file);
  }

  handleImgError(ev: Event) {
    (ev.target as HTMLImageElement).src =
      'https://placehold.co/400x250?text=Sin+imagen';
  }
}
