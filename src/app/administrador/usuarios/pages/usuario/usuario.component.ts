import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.scss'
})
export default class UsuarioComponent {

  private auth = inject(AuthService)
  loginAuth(){
    this.auth.getAuth().subscribe(res => {
      console.log(res.token);
      localStorage.setItem("api-token", res.token)
    })
  }

  outLogin(){
    localStorage.removeItem("api-token")
  }
}
