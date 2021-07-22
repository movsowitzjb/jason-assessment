 const resolvers ={
   Query:{
         async getGroup(root,{id},{models}){
             return models.Group.findById(id)
            },
            async getAllGroups(parent,args,{models}){
                return models.Group.findAll() 
    },
    async getOrg(root,{id},{models}){
        return models.Org.findById(id)
        
    },
    async getAllOrgs(root,args,{models}){
        return models.Org.findAll() 
    },
    async getSite(root,{id},{models}){
        return models.Site.findById(id)
        
    },
    async getAllSites(root,args,{models}){
        return models.Site.findAll()
    }
},
Mutation:{
       async createGroup(root,{name},{models}){
            return models.Group.create({
                id,
                name
            })
        },

        async createOrg(root,{name},{models}){
            return models.Org.create({
                name
            })
        },
        async createSite(root,{name},{models}){
            return models.Site.create({
                name,
                
            })
        },
    
           
                
    },
    Group:{
        async orgs(group){
            return group.getOrg()
        }
    
    },
    Orgs:{
        async group(org){
            return org.getGroup()
        },
        async site(org){
            return org.getSite()
        }
    },
    Site:{
        async orgs(site){
            return site.getOrg()
        }
    }
}

