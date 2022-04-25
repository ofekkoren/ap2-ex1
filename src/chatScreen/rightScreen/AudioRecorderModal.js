import "./AudioRecorderModal.css";

/**
 * A pop-up modal component which lets the user record and send audio messages.
 */
function AudioRecorderModal(props) {

    //If the validator equals true the audio recorded should be sent. Else, the audio should be dismissed.
    let audioValidator = true;
    //Will hold the mediaRecorder.
    var recorder = null

    /**
     * Handles clicking on the record audio and send audio button.
     */
    const handleSendAudioRecord = () => {
        let controlButton = document.getElementById("audioRecord");
        //Start the recording when clicking the record button
        if (controlButton.innerText === "Record message") {
            controlButton.innerText = "Send record";
            navigator.mediaDevices.getUserMedia({audio: true}).then(stream => {

                /*
                 * After getting permission to use the audio of the user we create a new recorder and setting its stop
                 * and dataAvailable listeners.
                 */
                recorder = new MediaRecorder(stream);
                recorder.start();
                let audioData = [];
                recorder.ondataavailable = event => {
                    audioData.push(event.data);
                }
                recorder.onstop = event => {
                    //Creating url object for the audio from the audio data that was stored in the audioData array.
                    let blob = new Blob(audioData);
                    //Stopping all recording
                    recorder.stream.getAudioTracks().forEach(track => track.stop());
                    let audioObject = URL.createObjectURL(blob);
                    sendAudioHelper(audioObject);
                }
            })
        }
        //At the next click on the button the audio will be sent
        else {
            //Closing the record audio modal.
            document.getElementById("dismissAfterAudioSent").click();

            /*
             * When clicking on record and then send too quick the recorder might be created too late. In this case
             * a timeout of 1 second is set to create the recorder. After checking that the recorder was created
             * we can stop it safely.
             */
            if (recorder === null)
                setTimeout(() => {
                    recorder.stop()
                }, 1000);
            else if (recorder instanceof MediaRecorder)
                recorder.stop()
            //Setting back the button to enable further recording.
            controlButton.innerText = "Record message";
        }
    }

    /**
     * Sending an audio message is the validator value is true.
     * @param audioRecord
     */
    const sendAudioHelper = (audioRecord) => {
        if (audioValidator === true) {
            let messageInfo = {
                type: "audio",
                content: audioRecord,
                createdAt: new Date().toISOString(),
                sender: props.sendingUser.username
            }
            //Appending the message to the end of the messages array.
            let messagesArr = [...props.chat.messages, messageInfo]
            props.setChat({users: props.chat.users, messages: messagesArr})
            //Setting back the button to enable further recording.
            document.getElementById("audioRecord").innerText = "Record message";
        }
        // Else, The audio won't be sent and the validator will return to its default value for further recordings.
        else
            audioValidator = true;
        recorder = null;
    }

    /**
     * Handles clicking on the dismissMessage (red button) on the recording audio modal.
     */
    const handleDismissAudio = () => {
        /*
         * If we didn't start recording and just clicked at the close button nothing will happen and the record modal
         * will be closed. If we did start recording, the validator will be set to false so that the record
         * won't be sent. Then we set back the button to enable further recording and stop the current recording.
         */
        if (recorder !== null) {
            audioValidator = false;
            document.getElementById("audioRecord").innerText = "Record message";
            recorder.stop()
        }
    }

    return (
        <div className="modal fade" id="recordModal" data-bs-backdrop="static"
             data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel"
             aria-hidden="true">
            <div className="modal-dialog record-modal-dialog">
                <div className="modal-content">
                    <div className="modal-header record-modal">
                        <h5 className="modal-title" id="staticBackdropLabel">Audio message</h5>
                    </div>
                    <div className="modal-footer record-modal">
                        {/*Close the modal/dismiss recording button*/}
                        <button type="button" className="btn btn-danger" id="dismissMessage"
                                data-bs-dismiss="modal" onClick={handleDismissAudio}>Dismiss message
                        </button>

                        {/*Button to close the modal if we send a message, not visible to the user*/}
                        <button style={{display: "none"}} type="button" className="btn btn-danger"
                                data-bs-dismiss="modal" id="dismissAfterAudioSent">
                        </button>

                        {/*start recording/send recording button*/}
                        <button type="button" className="btn btn-primary" id="audioRecord"
                                onClick={handleSendAudioRecord}>Record message
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AudioRecorderModal;