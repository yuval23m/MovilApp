import { AlertaService } from "./alerta.service";


describe('AlertaService',() =>{
    let service : AlertaService;
    let alertServiceSpy;
    let alertLoadingSpy;

    beforeEach(()=>{
        alertServiceSpy = jasmine.createSpyObj('Mensaje',{
            mensaje : 'funcionando'
        });
        alertLoadingSpy = jasmine.createSpyObj('Mensaje',{
            mensaje : 'funcionando loading'
        })
        service = new AlertaService(alertServiceSpy, alertLoadingSpy);
    });

    describe('alerta de mensaje', ()=>{
        it('Mensaje de alerta y loading pruebas',()=>{
            const service = new AlertaService(alertLoadingSpy, alertServiceSpy)
            expect(service).toBeTruthy();
        })
    });
})