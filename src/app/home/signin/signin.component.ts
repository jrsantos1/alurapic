import { PlatformDectorService } from './../../core/platform.detector.service';
import { AuthService } from './../../core/auth.service';
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  templateUrl: '/signin.component.html'
})
export class SigninComponent implements OnInit{

  faCircle = faCircle;

  loginForm!: FormGroup;
  @ViewChild('userNameInput') userNameInput!: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private platformDetector: PlatformDectorService
    ){}

  ngOnInit(): void {
      this.loginForm = this.formBuilder.group({
        userName: ['', Validators.required],
        password: ['', Validators.required]
      });
  }

  login(){
    const userName = this.loginForm.get('userName')?.value;
    const password = this.loginForm.get('password')?.value;


    this.authService.authenticate(userName, password).subscribe(
      () => {console.log('usuario foi autenticado');
      this.router.navigate(['user', userName])
      },
      err => {console.log("deu ruim" + err);
      alert('senha ou usuário inválido');
      this.platformDetector.isPlatformBrowser() &&
      this.userNameInput.nativeElement.focus();
      this.loginForm.reset()}

    )
    console.log('vai se autenticar');
  }

}
