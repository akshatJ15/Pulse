import { mutation } from "./_generated/server";
import { v } from "convex/values";

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