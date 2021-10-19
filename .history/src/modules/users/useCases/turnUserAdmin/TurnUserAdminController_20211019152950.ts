import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
    constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

    handle(request: Request, response: Response): Response {
        let { user_id } = request.headers;
        user_id = typeof user_id === "string" ? user_id : "";
        const user = this.turnUserAdminUseCase.execute({ user_id });

        return response.status(201).json(user);
    }
}

export { TurnUserAdminController };
