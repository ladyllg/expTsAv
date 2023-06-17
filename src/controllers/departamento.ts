import { Request, Response } from 'express';
import { Departamentos } from '../models/Departamentos';

async function index(req: Request, res: Response) {
    const departamentos = await Departamentos.findAll()
    res.render('departamento/index', { departamentos: departamentos.map((d) => d.toJSON()) })
};
async function read(req: Request, res: Response) {
    if (req.route.methods.get) {
        res.render('departamento/create')
    }
};
async function create(req: Request, res: Response) {
    if (req.route.methods.get) {
        res.render('departamento/create')
    } else {
        const departamento = req.body
        try {
            await Departamentos.create(departamento)
        } catch (e) {
            console.log(e)
        }
    }
};
async function update(req: Request, res: Response) { };
async function del(req: Request, res: Response) { };
export default { index, read, create, update, del }