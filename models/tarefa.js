import mongoose from "../databases/mongo.js";
const {Schema} = mongoose;

const tarefaSchema = new Schema({
    id: {
        type: Schema.Types.UUID,
        default: () => crypto.randomUUID(),
        unique: true
    },
    nome: {
        type: String,
        required: true
    },
    descricao: String,
    tipo: {
        type: String,
        enum: ['pessoal', 'profissional', 'outros']
    },
    localizacao: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    }
});

const Tarefas = mongoose
    .model('Tarefa', tarefaSchema);

export default Tarefas;