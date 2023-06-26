import React, { useState } from "react";
import styles from "./Profile.module.scss";
// @ts-ignore
import { Avatar, Switch, Input, Button } from "technogetic-iron-smart-ui";

import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Navbar } from "../../../../Components/Navbar/Navbar";
import DashboardSidebar from "../../../../Components/SideBar/DashboardSidebar";

export interface IAppProps {}

export function ProfileSetting() {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [notificationEnabled, setNotificationEnabled] = useState(false);

  const handleNotificationChange = () => {
    setNotificationEnabled(!notificationEnabled);
  };

  const userDetails = [
    { label: "Username", placeholder: "Your name" },
    { label: "Email Id", placeholder: "Enter Email" },
    { label: "Phone Number", placeholder: "Phone Number" },
    { label: "Job title", placeholder: "Job title" },
  ];

  return (
    <>
      <div className={styles.main_container}>
        <DashboardSidebar />
        <div className={styles.abcd}>
          <Navbar />
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
                    onClick={() => {}}
                    size={32}
                    className={styles.avatar}
                    src="./assets/avatar.png"
                  />
                  <div className={styles.addicon}>
                    <Button
                      onClick={function noRefCheck() {}}
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
                  className={styles.togglebutton}
                  checked={notificationEnabled}
                  onChange={handleNotificationChange}
                />
              </div>
            </div>

            <div className={styles.user_row}>
              <div className={styles.user}>
                <div className={styles.user_name}>
                  <div className={styles.text_details}>
                    {userDetails[0].label}
                  </div>
                  <Input
                    onChange={function noRefCheck() {}}
                    placeholder={userDetails[0].placeholder}
                    className={styles.user_input}
                    type="text"
                  />
                </div>
                <div className={styles.user_name}>
                  <div className={styles.text_details}>
                    {userDetails[1].label}
                  </div>
                  <Input
                    onChange={function noRefCheck() {}}
                    placeholder={userDetails[1].placeholder}
                    className={styles.user_input}
                    type="text"
                  />
                </div>
              </div>

              <div className={styles.user}>
                <div className={styles.user_name}>
                  <div className={styles.text_details}>
                    {userDetails[2].label}
                  </div>
                  <Input
                    onChange={function noRefCheck() {}}
                    placeholder={userDetails[2].placeholder}
                    className={styles.user_input}
                    type="text"
                  />
                </div>
                <div className={styles.user_name}>
                  <div className={styles.text_details}>
                    {userDetails[3].label}
                  </div>
                  <Input
                    onChange={function noRefCheck() {}}
                    placeholder={userDetails[3].placeholder}
                    className={styles.user_input}
                    type="text"
                  />
                </div>
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
      </div>
    </>
  );
}
