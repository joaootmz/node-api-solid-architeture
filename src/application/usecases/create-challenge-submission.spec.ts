import { inMemoryChallengesRepository } from "../../../tests/in-memory-challenges-repository";
import { InMemoryStudentsRepository } from "../../../tests/in-memory-student-repository";
import { Challenge } from "../../domain/entities/challenge";
import { Student } from "../../domain/entities/student";
import { CreateChallegeSubmission } from "./create-challenge-submission"

describe('Create challenge submission use case', () => {
    it('should be able to create a new challenge submission', async () => {
        const studentRepository = new InMemoryStudentsRepository
        const challengeRepository = new inMemoryChallengesRepository

        const student = Student.create({
            name: 'Joao',
            email: 'doe@expample.com',
        })

        const challenge = Challenge.create({
            title: 'Challenge 01',
            instructionsUrl: 'http://example.com'
        })

        studentRepository.items.push(student)
        challengeRepository.items.push(challenge)

        const sut = new CreateChallegeSubmission(
            studentRepository,
            challengeRepository,
        );

        const response =  await sut.execute({
            studentId: student.id,
            challengeId: challenge.id
        })

        expect(response).toBeTruthy();
    } )
})