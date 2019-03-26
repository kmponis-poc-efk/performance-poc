import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, tap } from 'rxjs/operators';
import { Student } from "./student";

@Injectable()
export class StudentService {
    studentRestApiUrl: string = 'http://localhost:9092/student/';
    httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

    constructor(private http: HttpClient) { }

    create(student: Student): Observable<Student> {
        const url = this.studentRestApiUrl + this.getSessionID();
        return this.http.post<Student>(url, student, this.httpOptions)
            .pipe(
                tap(_ => console.log(this.logMessage(url, "create"))),
                catchError(this.handleError<Student>(this.logMessage(url, "create")))
            );
    }

    delete(studentId: string): Observable<{}> {
        const url = this.studentRestApiUrl + studentId + this.getSessionID();
        return this.http.delete<Student>(url, this.httpOptions)
            .pipe(
                tap(_ => console.log(this.logMessage(url, "delete"))),
                catchError(this.handleError<Student>(this.logMessage(url, "delete")))
            );
    }

    removeCourseId(courseId: string): Observable<{}> { 
        const url = this.studentRestApiUrl + 'removeCourseId/' + courseId + this.getSessionID();
        return this.http.delete<Student[]>(url, this.httpOptions)
            .pipe(
                tap(_ => console.log(this.logMessage(url, "removeCourseId"))),
                catchError(this.handleError<Student[]>(this.logMessage(url, "removeCourseId"), []))
            );
    }

    update(student: Student): Observable<Student>  {
        const url = this.studentRestApiUrl + this.getSessionID();
        return this.http.put<Student>(url, student, this.httpOptions)
            .pipe(
                tap(_ => console.log(this.logMessage(url, "update"))),
                catchError(this.handleError<Student>(this.logMessage(url, "update")))
            );
    }

    findByStudentId(studentId: string): Observable<Student> {
        const url = this.studentRestApiUrl + 'findByStudentId/' + studentId + this.getSessionID();
        return this.http.get<Student>(url)
            .pipe(
                tap(_ => console.log(this.logMessage(url, "findByStudentId"))),
                catchError(this.handleError<Student>(this.logMessage(url, "findByStudentId")))
            );
    }

    findByName(name: string): Observable<Student[]> { 
        const url = this.studentRestApiUrl + 'findByName/' + name + this.getSessionID();
        return this.http.get<Student[]>(url)
            .pipe(
                tap(_ => console.log(this.logMessage(url, "findByName"))),
                catchError(this.handleError<Student[]>(this.logMessage(url, "findByName"), []))
            );
    }

    findAll(): Observable<Student[]> {
        const url = this.studentRestApiUrl + 'findAll' + this.getSessionID();
        return this.http.get<Student[]>(url)
            .pipe(
                tap(_ => console.log(this.logMessage(url, "findAll"))),
                catchError(this.handleError<Student[]>(this.logMessage(url, "findAll"), []))
            );
    }

    initialiseStudents(): Observable<{}> {
        const url = this.studentRestApiUrl + 'initialiseStudents' + this.getSessionID();
        return this.http.get<Student[]>(url)
            .pipe(
                tap(_ => console.log(this.logMessage(url, "initialiseStudents"))),
                catchError(this.handleError<Student[]>(this.logMessage(url, "initialiseStudents"), []))
            );
    }

    /**
     * Method to get sessionId url param.
     */
    private getSessionID(): string {
        return "?sessionId=" + sessionStorage.getItem("sessionId");
    }

    /**
     * Method to create a log message.
     * @param url rest api url
     * @param param method name 
     */
    private logMessage(url: string, param: string): string {
        return `Call 'student' REST Api(${param}): ${url}`;
    }

    /**
    * Handle Http operation that failed. Let the app continue.
    * @param operation - name of the operation that failed
    * @param result - optional value to return as the observable result
    */
    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
    
            // TODO: better job of transforming error for user consumption
            console.log(`${operation} failed: ${error.message}`);
    
            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}
