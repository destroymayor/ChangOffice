/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//收費標準
import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default class Charges extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chargesdata: [{
                line: 1,
                FileApearanceType: '紙張',
                CopyMode: '影印機黑白複印',
                Copyformat: 'B4(含)尺寸以下:每張二元、A3尺寸:每張三元',
                Remarks: '紙張複製輸出如為彩色複印，以左列黑白複製收費標準五倍計價。'
            }, {
                line: 2,
                FileApearanceType: '圖像',
                CopyMode: '翻拍',
                Copyformat: '3X5吋:每張八十元、4X6吋:每張一百元、5X7吋:每張一百五十元、8X10吋:每張一百八十元、10X12吋:每張六百元、11X14吋:每張七百五十元、16X20吋:每張九百元',
                Remarks: '圖像原件翻拍以未有合成圖像電子檔者為限。*本所暫不提供此項服務。'
            }, {
                line: 3,
                FileApearanceType: '電子檔案',
                CopyMode: '紙張黑白列印輸出',
                Copyformat: 'B4(含)尺寸以下:每張二元、A3尺寸:每張三元',
                Remarks: '電子檔案係指圖像及文字影像檔。紙張列印輸出如為彩色列印，以左列黑白複製收費標準五倍計算；相紙黑白、彩色列印輸出之收費標準相同。電子儲存媒體離線交付費用不含儲存媒體本身之費用。*本所暫不提供此項服務。'
            }, {
                line: 4,
                FileApearanceType: '電子檔案',
                CopyMode: '相紙列印輸出',
                Copyformat: 'A4(含)尺寸以下:每張三十元、B4(含)尺寸以上:每張六十元',
                Remarks: '電子檔案係指圖像及文字影像檔。紙張列印輸出如為彩色列印，以左列黑白複製收費標準五倍計算；相紙黑白、彩色列印輸出之收費標準相同。電子儲存媒體離線交付費用不含儲存媒體本身之費用。*本所暫不提供此項服務。'
            }, {
                line: 5,
                FileApearanceType: '電子檔案',
                CopyMode: '電子郵件傳送、電子儲存媒體離線交付',
                Copyformat: '檔案格式由機關自行決定，換算成A4頁數，每頁二元。',
                Remarks: '電子檔案係指圖像及文字影像檔。紙張列印輸出如為彩色列印，以左列黑白複製收費標準五倍計算；相紙黑白、彩色列印輸出之收費標準相同。電子儲存媒體離線交付費用不含儲存媒體本身之費用。*本所暫不提供此項服務。'
            }, {
                line: 6,
                FileApearanceType: '微縮片',
                CopyMode: '影印',
                Copyformat: 'B4(含)尺寸以下:每張三元、A3尺寸:每張五元',
                Remarks: '*本所暫不提供此項服務。'
            }, {
                line: 7,
                FileApearanceType: '微縮片',
                CopyMode: '16mm捲片複製',
                Copyformat: '重氮片:每捲四百元、銀鹽片:每捲八百元',
                Remarks: '*本所暫不提供此項服務。'
            }, {
                line: 8,
                FileApearanceType: '微縮片',
                CopyMode: '35mm捲片複製',
                Copyformat: '重氮片:每捲七百五十元、銀鹽片:每捲一千五百元、',
                Remarks: '*本所暫不提供此項服務。'
            }, {
                line: 9,
                FileApearanceType: '微縮片',
                CopyMode: '單片複製',
                Copyformat: '重氮片:每片五十元、銀鹽片:每片一百五十元、氣泡片:每片三十元',
                Remarks: '*本所暫不提供此項服務。'
            }, {
                line: 10,
                FileApearanceType: '錄音帶',
                CopyMode: '拷貝',
                Copyformat: '三十分鐘帶:每卷九十元、三十一分鐘至六十分鐘帶:每卷一百二十元、六十一分鐘至九十分鐘帶:每卷一百八十元、九十一分鐘以上:每卷二百元',
                Remarks: '錄音帶複製各項計價標準不含空白帶本身之費用。*本所暫不提供此項服務。'
            }, {
                line: 11,
                FileApearanceType: '錄影帶',
                CopyMode: '拷貝',
                Copyformat: '三十分鐘帶:每卷一百元、三十一分鐘至六十分鐘帶:每卷一百五十元、六十一分鐘至九十分鐘帶:每卷二百元、九十一分鐘以上:每卷二百五十元',
                Remarks: '錄影帶複製各項計價標準不含空白帶本身之費用。*本所暫不提供此項服務。'
            }]
        }
    }
    render() {
        return (
            <View style={ styles.container }>
              <FlatList data={ this.state.chargesdata } keyExtractor={ item => item.line } initialScrollIndex={ 10 } initialNumToRender={ 10 } renderItem={ this.renderRow }
              />
            </View>
            );
    }

    renderRow({item}) {
        return (
            <View style={ { width: '100%', marginBottom: 10, backgroundColor: '#e0e0e0' } }>
              <Text>
                檔案外觀型式:
                { item.FileApearanceType }
              </Text>
              <Text>
                複製方式:
                { item.CopyMode }
              </Text>
              <Text>複製格式及收費標準(以新台幣計價):
                { item.Copyformat }
              </Text>
              <Text>備註:
                { item.Remarks }
              </Text>
            </View>
            );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5FCFF'
    },
});
