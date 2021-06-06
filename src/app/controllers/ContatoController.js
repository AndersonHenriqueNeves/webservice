import Contato from '../models/Contato';

class ContatoController {
  async store(req, res) {
    const contatoExists = await Contato.findOne({
      where: {
        fone: req.body.fone
      }
    });

    if(contatoExists) {
      return res.status(401).json({ message: "Contato já existe"})
    }

    const contato = await Contato.create({
      pnome: req.body.pnome,
      snome: req.body.snome,
      endereco: req.body.endereco,
      fone: req.body.fone
    })

    return res.status(201).send();
  }

  async index(req, res) {
    const contatos = await Contato.findAll({
      order: [
        'snome',
        'pnome'
      ],
    })

    if(!contatos) {
      return res.status(400).json({message: "Nenhum contato registrado"})
    }

    return res.json(contatos)
  }

  async update(req, res) {
    const { id } = req.params;

    const contato = await Contato.findOne({
      where: { id: id }
    })

    if(!contato) {
      return res.status(400).json({message: "contato não existe"})
    }

    await contato.update(req.body);

    return res.status(200).send();
  }

  async delete(req, res) {
    const { id } = req.params;

    const contato = await Contato.findOne({
      where: { id: id }
    })

    if(!contato) {
      return res.status(400).json({message: "contato não existe"})
    }

    await Contato.destroy({
      where: {
        id: id
      }
    })

    return res.status(200).send();
  }
}

export default new ContatoController();