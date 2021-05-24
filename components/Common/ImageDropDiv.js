import React from 'react'
import {Form,Segment,Image,Icon,Header} from 'semantic-ui-react';


export default function ImageDropDiv(
    {highlighted,
    setHighlighted,
    inputRef,
    handleChange,
    mediaPreview,
    setMediaPreview,
    setMedia}) {
    return (
        <>

            <Form.Field >
                <Segment placeholder basic secondary>
                    <input
                     style={{display:"none"}}
                     type="file"
                     accept="image/*"
                     onChange={handleChange}
                     name="media"
                     ref={inputRef}
                     />

                     <div
                     onDragOver={(e)=>{
                         e.preventDefault();
                         setHighlighted(true);
                     }}
                     onDragLeave={(e)=>{
                         e.preventDefault();
                         setHighlighted(false);
                     }}
                     onDrop={(e)=>{
                         e.preventDefault();
                         setHighlighted(true);
                         const dropfile = Array.from(e.dataTransfer.files);
                         setMedia(dropfile[0]);
                         setMediaPreview(URL.createObjectURL(dropfile[0]));
                     }}
                     >
                         {mediaPreview === null ? (
                         <>
                         <Segment color={highlighted?'green':''} placeholder basic>
                             <Header icon>
                                 <Icon name="file image outline"
                                 style={{cursor : "pointer"}}
                                 onClick={()=>inputRef.current.click()}
                                 />
                                 Drag n Drop or click to upload image
                             </Header>
                         </Segment>
                         </>
                         
                         ):(
                         
                         <>
                         <Segment color="green" placeholder basic>
                             <Image
                              src={mediaPreview}
                              size="medium"
                              centered 
                              style={{cursor:"pointer"}}
                              onClick={()=>inputRef.current.click()}
                              />
                         </Segment>
                         
                         </>
                         
                         
                         )}


                     </div>
                </Segment>  
            </Form.Field>  
        </>
    )
}
