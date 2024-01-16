import { Submission } from "../../domain/entities/submission"
import { ChallengeRepository } from "../repositories/ChallengeRepository";
import { StudentRepository } from "../repositories/StudentRepository";

type CreateChallengeSubmissionRequest = {
    studentId: string;
    challengeId: string
}

export class CreateChallegeSubmission {
    constructor(
        private  studentRepository: StudentRepository,
        private challengeRepository: ChallengeRepository,
    ) {}

   async execute({studentId, challengeId} : CreateChallengeSubmissionRequest){
    const student = await this.studentRepository.findById(studentId)
    const challenge = await this.challengeRepository.findById(challengeId)

    if(!student){
        throw new Error('Student does not exist')
    }

    if(!challenge){
        throw new Error('Challente does not exist')
    }
        const submission =  Submission.create({
            studentId,
            challengeId
        })
        return submission
    }
}