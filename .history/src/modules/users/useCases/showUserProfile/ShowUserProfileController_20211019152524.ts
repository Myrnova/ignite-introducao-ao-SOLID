import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
    constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

    handle(request: Request, response: Response): Response {
        let { user_id } = request.headers;
        user_id = typeof user_id === "string" ? user_id : "";
        this.showUserProfileUseCase;
    }
}

export { ShowUserProfileController };
