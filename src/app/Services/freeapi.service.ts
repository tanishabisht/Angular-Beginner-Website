import {HttpClient, HttpParams} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Observable} from 'rxjs'

// Classes
import {Post} from '../Classes/Post' 

@Injectable()
export class freeApiService{
    constructor(private httpclient : HttpClient){}

    getComments(): Observable<any>{
        return this.httpclient.get('https://jsonplaceholder.typicode.com/posts/1/comments')
    }

    getCommentByParameter(): Observable<any>{
        let params1 = new HttpParams().set('userId','1')
        return this.httpclient.get('https://jsonplaceholder.typicode.com/posts', {params:params1})
    }

    postPost(opost:Post): Observable<any>{
        return this.httpclient.post('https://jsonplaceholder.typicode.com/posts', opost)
    }

    putPost(opost:Post): Observable<any>{
        return this.httpclient.put('https://jsonplaceholder.typicode.com/posts/1', opost)
    }

    deletePost(): Observable<any>{
        return this.httpclient.delete('https://jsonplaceholder.typicode.com/posts/1')
    }
}