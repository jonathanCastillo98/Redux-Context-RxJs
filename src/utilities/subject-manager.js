// RxJs
import { Subject } from 'rxjs'

export class SubjectManager {
    // Creando un canal de comunicación
    subject = new Subject();

    get getSubject() {
        return this.subject
    }
}