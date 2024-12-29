import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input, Select, InputNumber, Button, Form, Row, Col } from 'antd';
import {
  MediaState,
  updateEpisode,
  updateSeason,
  updateTitle,
  updateType,
  updateYear,
} from '../../features/media/mediaSlice';
import styles from './SearchForm.module.scss';

interface SearchFormProps {
  onSearch: () => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const { searchQuery } = useSelector((state: { media: MediaState }) => state.media);
  const dispatch = useDispatch<any>();
  const [showEpisodeFields, setShowEpisodeFields] = useState(false);

  const handleTypeChange = (value: string) => {
    dispatch(updateType(value));
    setShowEpisodeFields(value === 'episode');

    if (value !== 'episode') {
      dispatch(updateSeason(undefined));
      dispatch(updateEpisode(undefined));
    }
  };

  const handleSubmit = () => {
    onSearch();
  };

  return (
    <div className={`container ${styles.formPadding}`}>
      <Form layout="vertical" onFinish={handleSubmit}>
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Form.Item>
              <Input
                value={searchQuery.title}
                onChange={(e) => dispatch(updateTitle(e.target.value))}
                placeholder="Search..."
                size="large"
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={showEpisodeFields ? 6 : 12}>
            <Form.Item>
              <Select
                value={searchQuery.type}
                onChange={handleTypeChange}
                placeholder="Select Type"
                size="large"
              >
                <Select.Option value="movie">Movies</Select.Option>
                <Select.Option value="series">TV Shows</Select.Option>
                <Select.Option value="episode">Episodes</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={showEpisodeFields ? 6 : 12}>
            <Form.Item>
              <InputNumber
                value={searchQuery.year}
                onChange={(value) => dispatch(updateYear(value || ''))}
                placeholder="Year"
                min={'1900'}
                max={new Date().getFullYear().toString()}
                size="large"
                style={{ width: '100%' }}
              />
            </Form.Item>
          </Col>

          {showEpisodeFields && (
            <>
              <Col span={6}>
                <Form.Item>
                  <InputNumber
                    placeholder="Season"
                    min={1}
                    onChange={(value) => dispatch(updateSeason(value))}
                    size="large"
                    style={{ width: '100%' }}
                  />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item>
                  <InputNumber
                    placeholder="Episode"
                    min={0}
                    onChange={(value) => dispatch(updateEpisode(value))}
                    size="large"
                    style={{ width: '100%' }}
                  />
                </Form.Item>
              </Col>
            </>
          )}

        </Row>
        <Row>
          <Col span={24} style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Form.Item>
              <Button type="primary" htmlType="submit" size="large" block>
                Search
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default SearchForm;