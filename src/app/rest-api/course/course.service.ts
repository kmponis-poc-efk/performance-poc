import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, tap } from 'rxjs/operators';
import { Course } from "./course";

@Injectable()
export class CourseService {
    courseRestApiUrl: string = 'http://localhost:9093/course/';
    httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

    constructor(private http: HttpClient) { }

    create(course: Course): Observable<Course> {
        const url = this.courseRestApiUrl + this.getSessionID(false);
        return this.http.post<Course>(url, course, this.httpOptions)
            .pipe(
                tap(_ => console.log(this.logMessage(url, "create"))),
                catchError(this.handleError<Course>(this.logMessage(url, "create")))
            );
    }

    delete(courseId: string): Observable<{}> {
        const url = this.courseRestApiUrl + courseId + this.getSessionID(false);
        return this.http.delete<Course>(url, this.httpOptions)
            .pipe(
                tap(_ => console.log(this.logMessage(url, "delete"))),
                catchError(this.handleError<Course>(this.logMessage(url, "delete")))
            );
    }

    update(course: Course): Observable<Course> {
        const url = this.courseRestApiUrl + this.getSessionID(false);
        return this.http.put<Course>(url, course, this.httpOptions)
            .pipe(
                tap(_ => console.log(this.logMessage(url, "update"))),
                catchError(this.handleError<Course>(this.logMessage(url, "update")))
            );
    }

    findByCourseId(courseId: string[]): Observable<Course> {
        const url = this.courseRestApiUrl + 'findByCourseId/' + courseId + this.getSessionID(false);
        return this.http.get<Course>(url)
            .pipe(
                tap(_ => console.log(this.logMessage(url, "findByCourseId"))),
                catchError(this.handleError<Course>(this.logMessage(url, "findByCourseId")))
            );
    }

    findByName(name: string): Observable<Course[]> { 
        const url = this.courseRestApiUrl + 'findByName/' + name + this.getSessionID(false);
        return this.http.get<Course[]>(url)
            .pipe(
                tap(_ => console.log(this.logMessage(url, "findByName"))),
                catchError(this.handleError<Course[]>(this.logMessage(url, "findByName"), []))
            );
    }

    findCourseIdsName(courseIds: string[]): Observable<string> { 
        let courseIdsParam = "";
        for (let courseId of courseIds) {
            if (courseIdsParam) {
                courseIdsParam = courseIdsParam + "&courseIds=" + courseId;
            } else {
                courseIdsParam = "?courseIds=" + courseId;
            }
        }
        const url = this.courseRestApiUrl + 'findCourseIdsName' + courseIdsParam + this.getSessionID(true);
        return this.http.get(url, { responseType: 'text' })
            .pipe(
                tap(_ => console.log(this.logMessage(url, "findCourseIdsName"))),
                catchError(this.handleError<string>(this.logMessage(url, "findCourseIdsName")))
            );
    }

    findAll(): Observable<Course[]> {
        const url = this.courseRestApiUrl + 'findAll' + this.getSessionID(false);
        return this.http.get<Course[]>(url)
            .pipe(
                tap(_ => console.log(this.logMessage(url, "findAll"))),
                catchError(this.handleError<Course[]>(this.logMessage(url, "findAll"), []))
            );
    }

    initialiseCourses(): Observable<{}> {
        const url = this.courseRestApiUrl + 'initialiseCourses' + this.getSessionID(false);
        return this.http.get<Course[]>(url)
            .pipe(
                tap(_ => console.log(this.logMessage(url, "initialiseCourses"))),
                catchError(this.handleError<Course[]>(this.logMessage(url, "initialiseCourses"), []))
            );
    }

    /**
     * Method to get sessionId url param.
     * @param anotherParam
     */
    private getSessionID(anotherParam: boolean): string {
        let sessionIdParam;
        if (anotherParam) {
            sessionIdParam = "&sessionId=" + sessionStorage.getItem("sessionId");
        } else {
            sessionIdParam = "?sessionId=" + sessionStorage.getItem("sessionId");
        }
        return sessionIdParam;
    }

    /**
     * Method to create a log message.
     * @param url rest api url
     * @param param method name 
     */
    private logMessage(url: string, methodName: string): string {
        return `Call 'course' REST Api(${methodName}): ${url}`;
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
