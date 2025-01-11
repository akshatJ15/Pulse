import { mutation } from "./_generated/server";
import { v } from "convex/values";
import { query } from "./_generated/server";

export const CreateWorkSpace=mutation({
    args: {
        messages:v.any(),
        user:v.id("users")
    },
    handler:async(ctx,args)=>{
        try{
            const workspaceId=await ctx.db.insert("workspace",{
                messages:args.messages,
                user:args.user
            })
            console.log(workspaceId);
            return workspaceId;
        }catch(error){
            throw new Error("Error creating workspace: "+error.message);
        }
    }
})

export const GetWorkspaceData = query({
    args:{
        workspaceId: v.string()
    },
    handler: async(ctx, args) => {
        const workspace = await ctx.db.get(args.workspaceId);
        return workspace;
    }
})