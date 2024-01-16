import { ChallengeRepository } from "../src/application/repositories/ChallengeRepository";
import { Challenge } from "../src/domain/entities/challenge";

export class inMemoryChallengesRepository implements ChallengeRepository {
    public items: Challenge[] = []

    async findById(id: string): Promise<Challenge | null> {
        const challenge = this.items.find(student => student.id === id)

        if(!challenge){
            return null
        }

        return challenge
    }

}