import { HttpClient } from '@angular/common/http';
import {
    HttpClientTestingModule,
    HttpTestingController,
  } from '@angular/common/http/testing';
  import { TestBed } from '@angular/core/testing';
  import { ApiService } from './api.service';
  
  describe('apiService (HttpClient TEST)', () => {
    let apiService: ApiService;
    let httpTestingController: HttpTestingController;
    let ALUMNOS = [
      {
        id: 1,
        nombre: 'nombre 1',
        username: 'username 1',
        password : 'password 1'
      },
      {
        id: 1,
        nombre: 'nombre 2',
        username: 'username 2',
        password : 'password 3'
      },
      {
        id: 1,
        nombre: 'nombre 3',
        username: 'username 3',
        password : 'password 3'
      },
    ];
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [ApiService],
        
        imports: [HttpClientTestingModule],
      });
  
      apiService = TestBed.inject(ApiService);
      httpTestingController = TestBed.inject(HttpTestingController);
    });
  
    describe('getJson()', () => {
      it('Deberia mostrar todos los alumnos llamados del github', (done: DoneFn) => {
        apiService.getJson().subscribe((data) => {
          expect(data).toEqual(ALUMNOS);
          done();
        });
  
        const request = httpTestingController.expectOne(
          'https://nancyb3a.github.io/Test/usuarios_PGY4121_03.json'
        );
        request.flush(ALUMNOS);
        expect(request.request.method).toBe('GET');
      });
    });
  
    afterEach(() => {
      httpTestingController.verify();
    });
  });