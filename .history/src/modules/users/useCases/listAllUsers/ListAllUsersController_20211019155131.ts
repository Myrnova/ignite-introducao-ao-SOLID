import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
    constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

    handle(request: Request, response: Response): Response {
        try {
            let { user_id } = request.headers;
            user_id = typeof user_id === "string" ? user_id : "";
            const user = this.showUserProfileUseCase.execute({ user_id });

            return response.status(201).json(user);

            const users = this.listAllUsersUseCase.execute({ user_id });

            return response.status(200).json(users);
        } catch (er) {
            return response.status(400).json({ error: er.message });
        }
    }
}

export { ListAllUsersController };
