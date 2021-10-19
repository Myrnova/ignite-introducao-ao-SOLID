import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
    constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

    handle(request: Request, response: Response): Response {
        try {
            const { user_id } = request.params;
            const user = this.turnUserAdminUseCase.execute({ user_id });

            return response.status(201).json(user);
        } catch (er) {
            return response.status(400).json({ error: er.message });
        }
    }
}

export { TurnUserAdminController };
