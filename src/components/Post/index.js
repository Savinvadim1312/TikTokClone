import React, {useState} from 'react';
import {View, TouchableWithoutFeedback, Text, Image} from 'react-native';

import Video from 'react-native-video';
import styles from './styles';

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Post = (props) => {
  const {post} = props;

  const [paused, setPaused] = useState(false);

  const onPlayPausePress = () => {
    setPaused(!paused);
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPlayPausePress}>
        <View>
          <Video
            source={{uri: post.videoUri}}
            style={styles.video}
            onError={(e) => console.log(e)}
            resizeMode={'cover'}
            repeat={true}
            paused={paused}
          />

          <View style={styles.uiContainer}>
            <View style={styles.rightContainer}>
              <Image
                style={styles.profilePicture}
                source={{uri: post.user.imageUri}}
              />

              <View style={styles.iconContainer}>
                <AntDesign name={'heart'} size={40} color="white" />
                <Text style={styles.statsLabel}>{post.likes}</Text>
              </View>

              <View style={styles.iconContainer}>
                <FontAwesome name={'commenting'} size={40} color="white" />
                <Text style={styles.statsLabel}>{post.comments}</Text>
              </View>

              <View style={styles.iconContainer}>
                <Fontisto name={'share-a'} size={35} color="white" />
                <Text style={styles.statsLabel}>{post.shares}</Text>
              </View>
            </View>

            <View style={styles.bottomContainer}>
              <View>
                <Text style={styles.handle}>@{post.user.username}</Text>
                <Text style={styles.description}>{post.description}</Text>

                <View style={styles.songRow}>
                  <Entypo name={'beamed-note'} size={24} color="white" />
                  <Text style={styles.songName}>{post.songName}</Text>
                </View>
              </View>

              <Image
                style={styles.songImage}
                source={{uri: post.songImage}}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Post;
