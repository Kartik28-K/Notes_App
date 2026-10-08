
from fastapi import APIRouter
from database import notes_collection
from model import notes_model
from datetime import datetime
from bson import ObjectId
from fastapi import HTTPException
router=APIRouter()

@router.post('/add')
def addNote(data:notes_model):
    curr_time = datetime.now()
    temp={
         'title':data.title,
         'content':data.content,
         'created_at':curr_time.strftime("%Y-%m-%d %H:%M:%S"),
         'updated_at':curr_time.strftime("%Y-%m-%d %H:%M:%S"),
         'pinned':False
    }
    notes_collection.insert_one(temp)
    return {"message":"Notes added SuccessFully"}

@router.put('/pin/{id}')
def pin_note(id:str):
    note = notes_collection.find({'_id':ObjectId(id)})

    if note is None:
        raise HTTPException(status_code=404,detail="Note Not Found")


    for item in note:
        current_status = item.get("pinned",False)

    notes_collection.update_one(
        {'_id':ObjectId(id)},
        {
            "$set":{
                'pinned':not current_status
            }
        }
    )

    return {
        "message": "Pin status updated",
        "pinned": not current_status
    }

    

@router.put('/update/{id}')
def updateNote(id:str,data:notes_model):
    curr_time = datetime.now()
    result = notes_collection.update_one(
        {"_id": ObjectId(id)},
        {
            "$set": {
                "title": data.title,
                "content": data.content,
                "updated_at": curr_time.strftime("%Y-%m-%d %H:%M:%S")
            }
        }
    )

    if result.matched_count == 0:
        raise HTTPException(
            status_code=404,
            detail="Note Not Found"
        )

    return {"message": "Note updated successfully"}

@router.delete('/delete/{id}')
def delNote(id:str):
    result=notes_collection.delete_one({"_id":ObjectId(id)})
    if(result.deleted_count==0):
        raise HTTPException(
            status_code=404,
            detail="Note Not Found"
        )

    return {"message":"Note deleted SuccessFully"}


@router.get('/show')
def ShowNote():
    all_notes=notes_collection.find()
    list=[]
    for item in all_notes:
        item['_id']=str(item['_id'])
        list.append(item)

    return list