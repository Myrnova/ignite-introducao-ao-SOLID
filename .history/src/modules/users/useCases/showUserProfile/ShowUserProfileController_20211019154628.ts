import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
    constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

    handle(request: Request, response: Response): Response {
        try {
            const { user_id } = request.params;
            const user = this.showUserProfileUseCase.execute({ user_id });

            return response.status(201).json(user);
        } catch (er) {
            return response.status(400).json({ error: er.message });
        }
    }
}

export { ShowUserProfileController };
