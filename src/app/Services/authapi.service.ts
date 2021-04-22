import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Observable} from 'rxjs'

// Classes
// import {Login} from '../Classes/login' 
// import {SignUp} from '../Classes/signup' 

@Injectable()
export class authApiService{
    constructor(private httpclient : HttpClient){}

    postLogin(opost:any): Observable<any>{
        return this.httpclient.post('http://springboot-users-crud-jwt.herokuapp.com/api/auth/signin', opost)
    }

    postSignUp(opost:any): Observable<any>{
        return this.httpclient.put('http://springboot-users-crud-jwt.herokuapp.com/api/auth/signup', opost)
    }

}