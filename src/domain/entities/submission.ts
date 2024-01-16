import { Entity } from "../../core/domain/Entity";

type SubimissionProps = {
    challengeId: string;
    studentId: string;
    createdAt?: Date;
}

export class Submission extends Entity<SubimissionProps>{
    private constructor(props: SubimissionProps, id?: string){
        super(props, id)
    }

    static create(props: SubimissionProps, id?: string) {
        const submission = new Submission({
            ...props, 
            createdAt: props.createdAt ?? new Date()
        }, id)

        return submission;

    }
}