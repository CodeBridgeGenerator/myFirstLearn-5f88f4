
    module.exports = function (app) {
        const modelName = "user_details";
        const mongooseClient = app.get("mongooseClient");
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            firstN: { type:  String , comment: "firstN, p, false, true, true, true, true, true, true, , , , ," },
course: { type:  String , comment: "course, p, false, true, true, true, true, true, true, , , , ," },
phoneNo: { type: Number, max: 1000000, comment: "phoneNo, p_number, false, true, true, true, true, true, true, , , , ," },

            createdBy: { type: Schema.Types.ObjectId, ref: "users", required: true },
            updatedBy: { type: Schema.Types.ObjectId, ref: "users", required: true },
          }, { timestamps: true });
      
       
        if (mongooseClient.modelNames().includes(modelName)) {
          mongooseClient.deleteModel(modelName);
        }
        return mongooseClient.model(modelName, schema);
        
      };