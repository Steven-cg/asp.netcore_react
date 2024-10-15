import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Select, message, DatePicker } from 'antd';
import { getUsuarioById, updateUsuario } from '../../../service/usuarioService'; 
import moment from 'moment';

const { Option } = Select;

const PersonaForm = () => {
  const [formValues, setFormValues] = useState({
    nombre: '',
    apellido: '',
    fecha_nacimiento: null, 
    estatura: '',
    estado_civil: '',
  });
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (userId) {
      getUsuarioById(userId)
        .then((data) => {
          setFormValues({
            nombre: data.nombre || '',
            apellido: data.apellido || '',
            fecha_nacimiento: data.fecha_nacimiento ? moment(data.fecha_nacimiento) : null,
            estatura: data.estatura || '',
            estado_civil: data.estado_civil || '',
          });
        })
        .catch((error) => {
          message.error('Error al cargar los datos del usuario');
          console.error(error);
        });
    }
  }, []);

  const handleChange = (e, key) => {
    setFormValues({ ...formValues, [key]: e.target ? e.target.value : e });
  };

  const handleSelectChange = (value) => {
    setFormValues({ ...formValues, estado_civil: value });
  };

  const handleDateChange = (date, dateString) => {
    setFormValues({ ...formValues, fecha_nacimiento: date });
  };

  const handleSave = () => {
    const userId = localStorage.getItem('userId'); 
    
    console.log("Datos enviados:", { userId, formValues }); 

    updateUsuario(userId, {
      ...formValues,
      fecha_nacimiento: formValues.fecha_nacimiento ? formValues.fecha_nacimiento.format('YYYY-MM-DD') : null
    })
      .then(() => {
        message.success('Datos actualizados correctamente');
        setEditMode(false);
      })
      .catch((error) => {
        message.error('Error al actualizar los datos');
        console.error("Error al actualizar usuario:", error); 
      });
  };

  // Cancelar edición
  const handleCancel = () => {
    setEditMode(false);
  };

  return (
    <Form layout="vertical">
      <Form.Item label="Nombre">
        <Input
          value={formValues.nombre}
          onChange={(e) => handleChange(e, 'nombre')}
          disabled={!editMode}
        />
      </Form.Item>
      <Form.Item label="Apellido">
        <Input
          value={formValues.apellido}
          onChange={(e) => handleChange(e, 'apellido')}
          disabled={!editMode}
        />
      </Form.Item>
      <Form.Item label="Fecha de Nacimiento">
        <DatePicker
          value={formValues.fecha_nacimiento} 
          onChange={handleDateChange}
          disabled={!editMode}
        />
      </Form.Item>
      <Form.Item label="Estatura">
        <Input
          value={formValues.estatura}
          onChange={(e) => handleChange(e, 'estatura')}
          disabled={!editMode}
        />
      </Form.Item>
      <Form.Item label="Estado Civil">
        <Select
          value={formValues.estado_civil}
          onChange={handleSelectChange}
          disabled={!editMode}
        >
          <Option value="Soltero">Soltero</Option>
          <Option value="Casado">Casado</Option>
          <Option value="Divorciado">Divorciado</Option>
          <Option value="Viudo">Viudo</Option>
        </Select>
      </Form.Item>
      <Form.Item>
        <Button type="primary" onClick={() => setEditMode(true)} disabled={editMode}>
          Editar
        </Button>
        {editMode && (
          <>
            <Button type="primary" onClick={handleSave} style={{ marginLeft: 10 }}>
              Guardar
            </Button>
            <Button onClick={handleCancel} style={{ marginLeft: 10 }}>
              Cancelar
            </Button>
          </>
        )}
      </Form.Item>
    </Form>
  );
};

export default PersonaForm;
