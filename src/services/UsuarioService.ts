import { AppDataSource } from '../data-source';
import { Repository } from 'typeorm';
import { Usuario } from '../entity/Usuario'; 

class UsuarioService {
  private usuarioRepository: Repository<Usuario>;

  constructor() {
    this.usuarioRepository = AppDataSource.getRepository(Usuario);
  }

  
  public async listarUsuarios(): Promise<Usuario[]> {
    console.log("testes");
      const usuarios = await this.usuarioRepository.find();
      if (!usuarios){
        throw new Error('Lista de usuários vazia');
      }

      return usuarios;
  }

  
  public async obterUsuario(matricula: string): Promise<Usuario | null> {
    return this.usuarioRepository.findOneBy({ matricula });
  }

  
  public async criarUsuario(dados: Usuario): Promise<Usuario> {
    
    const usuarioExistente = await this.usuarioRepository.findOneBy({ matricula: dados.matricula });
    if (usuarioExistente) {
      throw new Error('Usuário já existe com esta matrícula.');
    }

    


    const novoUsuario = this.usuarioRepository.create(dados);
    return this.usuarioRepository.save(novoUsuario);
  }

  
  public async atualizarUsuario(matricula: string, dados: Partial<Usuario>): Promise<Usuario | null> {
    const usuarioExistente = await this.usuarioRepository.findOneBy({ matricula });
    if (!usuarioExistente) {
      return null;
    }

    
    if (dados.password) {

 
    }

    Object.assign(usuarioExistente, dados);
    return this.usuarioRepository.save(usuarioExistente);
  }

  
  public async deletarUsuario(matricula: string): Promise<boolean> {
    const resultado = await this.usuarioRepository.delete({ matricula });
    return resultado.affected !== 0;
  }
}

export default new UsuarioService();
