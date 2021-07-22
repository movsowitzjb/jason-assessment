import {groups,orgs,sites} from '../dummyInfo'
const Mutation = {
        createGroup:(parent,args,ctx,info)=>{
            const group = {
                id:uuidv4(),
                name:args.name,
            }
            groups.push(group);
            return group;
        },
        updateGroup:(parent,args,ctx,info)=>{
        
        }
    }
export {Mutation as default}