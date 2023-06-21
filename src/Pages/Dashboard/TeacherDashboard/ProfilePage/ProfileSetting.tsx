import React, { useState } from "react";
import styles from "./Profile.module.scss";
// @ts-ignore
import { Avatar, Switch, Input, Button } from "technogetic-iron-smart-ui";

import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Navbar } from "../../../../Components/Navbar/Navbar";

export interface IAppProps { }

export function ProfileSetting() {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [notificationEnabled, setNotificationEnabled] = useState(false);

  const handleNotificationChange = () => {
    setNotificationEnabled(!notificationEnabled);
  };

  return (
    <>
      <Navbar />
      <div className={styles.main_container}>
        <div className={styles.container}>
          <h1 className={styles.Profile_Setting}>Profile Settings</h1>
          <span className={styles.main_profile}>
            Dashboard/Profile Settings
          </span>
        </div>
        <div className={styles.edit_profile}>
          <div className={styles.profile}>
            <div className={styles.block1}>
              <div className={styles.circle}>
                <Avatar
                  onClick={() => { }}
                  size={32}
                  className={styles.avatar}
                  src="./assets/avatar.png"
                />
                <div className={styles.addicon}>
                  <Button
                    onClick={function noRefCheck() { }}
                    type="file"
                    variant="contained"
                    className={styles.addicon}
                  >
                    <img src="./assets/add.svg" alt="vector" />
                  </Button>
                </div>
              </div>
              <div className={styles.user_details}>
                <h1 className={styles.username}>Harry Verma</h1>
                <span className={styles.details}>
                  Update your Profile and personal details
                </span>
                <div className={styles.text}>
                  This will be displayed on your profile
                </div>
              </div>
            </div>

            <div className={styles.block2}>
              <div className={styles.enable_notification}>
                Enable notification
              </div>
              <Switch
                checked={notificationEnabled}
                onChange={handleNotificationChange}
              />
            </div>
          </div>
          <div className={styles.user}>
            <div className={styles.user_name}>
              <div className={styles.text_details}>Username</div>
              <Input
                onChange={function noRefCheck() { }}
                placeholder="Your name"
                className={styles.user_input}
                type="text"
              />
            </div>
            <div className={styles.user_email}>
              <div className={styles.text_details}>Email Id</div>
              <Input
                onChange={function noRefCheck() { }}
                placeholder="Enter Email"
                className={styles.user_input}
                type="email"
              />
            </div>
          </div>
          <div className={styles.user}>
            <div className={styles.user_name}>
              <div className={styles.text_details}>Phone Number</div>
              <Input
                onChange={function noRefCheck() { }}
                placeholder="Phone Number"
                className={styles.user_input}
                type="text"
              />
            </div>
            <div className={styles.user_email}>
              <div className={styles.text_details}>Job title</div>
              <Input
                onChange={function noRefCheck() { }}
                placeholder="Job title"
                className={styles.user_input}
                type="text"
              />
            </div>
          </div>
          <div className={styles.bio}>
            <div className={styles.yourshortbio}>
              <div> Your Short bio</div>
              <span className={styles.bio_text}>
                Write a short introduction about your
              </span>
            </div>
            <div className={styles.description_box}>
              <Editor
                editorState={editorState}
                onEditorStateChange={setEditorState}
                toolbar={{
                  options: [
                    "inline",
                    "blockType",
                    "list",
                    "textAlign",
                    "link",
                    "embedded",
                  ],
                  inline: {
                    options: ["bold", "italic", "underline", "strikethrough"],
                  },
                  blockType: {
                    options: [
                      "Normal",
                      "H1",
                      "H2",
                      "H3",
                      "H4",
                      "H5",
                      "H6",
                      "Blockquote",
                      "Code",
                    ],
                  },
                  list: {
                    options: ["unordered", "ordered"],
                  },
                  textAlign: {
                    options: ["left", "center", "right", "justify"],
                  },
                }}
                placeholder="Enter text here..."
              />
            </div>
          </div>
          <div className={styles.buttons}>
            <Button variant="contained" className={styles.submitbutton}>
              Submit
            </Button>
            <Button variant="contained" className={styles.cancelbutton}>
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
